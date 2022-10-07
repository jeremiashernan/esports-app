type TNode = {
  id: string
  level: number
  title: string
  text: string
}

export type TNodeList = TNode[]

const nodeRulesList: TNodeList = [
  {
    id: '1',
    level: 1,
    title: 'Introduction',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '2',
    level: 1,
    title: ' SUPER and PCS Rulebook',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut t ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '3',
    level: 1,
    title: 'Competition System',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut t ut labore et dolore magna aliqua. Ut enim ad minim veniam, eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '4',
    level: 1,
    title: 'References',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '4A',
    level: 2,
    title: 'References Subtopic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '4B',
    level: 2,
    title: 'References Subtopic',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  },
  {
    id: '5',
    level: 1,
    title: 'Basic Information',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate veli'
  }
]

export { nodeRulesList }
