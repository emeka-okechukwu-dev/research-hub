import { Research } from '../types/research'

export const researchBinarySearch = (
  researches: Research[],
  searchTerm: string
): Research[] => {
  if (searchTerm === '') {
    return researches
  }

  const sortedResearches = researches
    .slice()
    .sort((a, b) => a.researchTopic.localeCompare(b.researchTopic))

  const matchingResearches = findMatchingResearches(
    sortedResearches,
    searchTerm
  )

  return matchingResearches
}

const findMatchingResearches = (
  sortedResearches: Research[],
  searchTerm: string
): Research[] => {
  let left = 0
  let right = sortedResearches.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currentResearch = sortedResearches[mid]

    if (
      researchTopicMatchesSearchTerm(currentResearch.researchTopic, searchTerm)
    ) {
      return findAllMatchingResearches(sortedResearches, mid, searchTerm)
    } else if (
      currentResearch.researchTopic.toLowerCase() < searchTerm.toLowerCase()
    ) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return []
}

const researchTopicMatchesSearchTerm = (
  researchTopic: string,
  searchTerm: string
): boolean => {
  return researchTopic.toLowerCase().includes(searchTerm.toLowerCase())
}

const findAllMatchingResearches = (
  sortedResearches: Research[],
  mid: number,
  searchTerm: string
): Research[] => {
  const matchingResearches = []

  for (let i = mid; i >= 0; i--) {
    if (
      researchTopicMatchesSearchTerm(
        sortedResearches[i].researchTopic,
        searchTerm
      )
    ) {
      matchingResearches.push(sortedResearches[i])
    } else {
      break
    }
  }

  for (let i = mid + 1; i < sortedResearches.length; i++) {
    if (
      researchTopicMatchesSearchTerm(
        sortedResearches[i].researchTopic,
        searchTerm
      )
    ) {
      matchingResearches.push(sortedResearches[i])
    } else {
      break
    }
  }

  return matchingResearches
}
