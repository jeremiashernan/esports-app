import { NextApiRequest, NextApiResponse } from 'next'
import * as Yup from 'yup'
import {
  getBroadcasts,
  getCompanies,
  getEventDetails,
  getEvents,
  getFormatItem,
  getMatches,
  getPlayers,
  getPrize,
  getRounds,
  getTeams,
  getTeamStatus,
  getTournamentFormat
} from '../../../services/google-sheets-client'

const validationSchema = Yup.object().shape({
  selected_id: Yup.string().required()
})

const details = async (req: NextApiRequest, res: NextApiResponse) => {
  let companies_ids = ''
  let tournament_format_ids = ''
  let matches_ids = ''
  let teams_ids = ''
  let broadcasts_ids = ''

  try {
    // validationSchema.validate(req.query)
    // const selected_id = req.query
    const selected_id = 'as-pac3'
    await validationSchema.validate({ selected_id })
    let events = await getEventDetails()
    if (selected_id && events) {
      events = events.filter((item) => {
        if (selected_id === item.id) {
          companies_ids = item.companies
          tournament_format_ids = item.tournament_format
          matches_ids = item.matches
          teams_ids = item.teams
          broadcasts_ids = item.broadcasts
          return item
        }
      })
    }

    let event_list = await getEvents()
    if (event_list) {
      event_list = event_list.filter((list) => {
        if (selected_id === list.tournamentId) {
          return list
        }
      })
    }

    let companies = await getCompanies()
    if (companies && companies_ids) {
      companies = companies.filter((company) => {
        if (companies_ids.includes(company.id)) {
          return company
        }
      })
    }

    let tournament_formats = await getTournamentFormat()
    const format_items = await getFormatItem()
    const initialFormats: Array<string> = []

    if (tournament_formats && tournament_format_ids) {
      tournament_formats = tournament_formats.reduce(
        (selected_formats, format) => {
          if (tournament_format_ids.includes(format.id)) {
            let items = format_items
            if (items) {
              items = items.filter((item) => {
                if (format.items.includes(item.id)) {
                  return item
                }
              })
            }
            selected_formats.push({ ...format, items: items })
          }
          return selected_formats
        },
        initialFormats
      )
    }

    let matches = await getMatches()
    let team_matches = matches
    let teams = await getTeams()
    const players = await getPlayers()
    const initialMatches: Array<string> = []
    const initialTeams: Array<string> = []

    if (teams && teams_ids) {
      teams = teams.reduce((selected_teams, team) => {
        if (teams_ids.includes(team.id)) {
          let team_players = players
          if (team_players) {
            team_players = team_players.filter((player) => {
              if (team.id === player.team_id) {
                return player
              }
            })
          }
          selected_teams.push({ ...team, players: team_players })
        }
        return selected_teams
      }, initialTeams)
    }

    if (matches && matches_ids) {
      matches = matches.reduce((selected_matches, match) => {
        if (matches_ids.includes(match.id)) {
          let match_teams = teams
          if (match_teams) {
            match_teams = match_teams.filter((team) => {
              if (match.teams.includes(team.id)) {
                return team
              }
            })
          }
          selected_matches.push({ ...match, teams: match_teams })
        }
        return selected_matches
      }, initialMatches)
    }

    let broadcasts = await getBroadcasts()
    if (broadcasts && broadcasts_ids) {
      broadcasts = broadcasts.filter((talent) => {
        if (broadcasts_ids.includes(talent.id)) {
          return talent
        }
      })
    }

    const rounds = await getRounds()
    let prize = await getPrize()
    const leaderboards: Array<string> = []

    if (prize) {
      prize = prize.reduce((leaderboard, item) => {
        if (item.event_id === selected_id) {
          let prize_team = teams
          if (prize_team) {
            prize_team = prize_team.filter((team) => {
              if (team.id === item.team_id) {
                return team
              }
            })
          }
          let team_round = rounds
          if (team_round) {
            team_round = team_round.filter((round) => {
              if (item.team_id === round.team_id) {
                return round
              }
            })
          }
          leaderboard.push({ ...item, team: prize_team, rounds: team_round })
        }
        return leaderboard
      }, leaderboards)
    }

    let team_status = await getTeamStatus()

    const initialTeamStatus: Array<string> = []

    if (team_status) {
      team_status = team_status.reduce((status, item) => {
        let checked_team = teams
        if (checked_team) {
          checked_team = checked_team.filter((team) => {
            if (team.id === item.team_id) {
              return team
            }
          })
        }
        if (team_matches) {
          team_matches = team_matches.filter((match) => {
            if (checked_team && match.teams.includes(checked_team[0].id)) {
              return match
            }
          })
        }
        let team_round = rounds
        if (team_round) {
          team_round = team_round.filter((round) => {
            if (
              item.team_id === round.team_id &&
              round.event_id === selected_id
            ) {
              return round
            }
          })
        }
        status.push({
          ...item,
          team: checked_team,
          matches: team_matches,
          rounds: team_round
        })
        return status
      }, initialTeamStatus)
    }

    const results = {
      ...event_list[0],
      id: selected_id,
      companies: companies,
      tournaments: tournament_formats,
      matches: matches,
      teams: teams,
      broadcasts: broadcasts,
      leaderboards: prize,
      status: team_status
    }

    res.status(200).json(results)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default details
