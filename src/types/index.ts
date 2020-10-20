export interface Repo {
  totalCount: string
  nodes: RepoNodes[]
}

export interface RepoNodes {
  id: string
  name: string
  description: string
  url: string
  createdAt: string
  updatedAt: string
  stargazerCount: string
  languages: RepoLanguages
}

interface RepoLanguages {
  totalCount: string
  totalSize: number
  edges: Array<{
    size: number
    node: {
      name: string
      color: string
    }
  }>
}