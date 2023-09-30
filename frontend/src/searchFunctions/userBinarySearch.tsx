import { User } from '../types/user'

export const userBinarySearch = (users: User[], searchTerm: string): User[] => {
  if (searchTerm === '') {
    return users
  }

  const sortedUsers = [...users].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  )

  const matchingUsers = findMatchingUsers(sortedUsers, searchTerm)

  return matchingUsers
}

const findMatchingUsers = (sortedUsers: User[], searchTerm: string): User[] => {
  let left = 0
  let right = sortedUsers.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const currentUser = sortedUsers[mid]

    if (userMatchesSearchTerm(currentUser, searchTerm)) {
      return findAllMatchingUsers(sortedUsers, mid, searchTerm)
    } else if (currentUser.firstName.toLowerCase() < searchTerm.toLowerCase()) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return []
}

const userMatchesSearchTerm = (user: User, searchTerm: string): boolean => {
  return (
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  )
}

const findAllMatchingUsers = (
  sortedUsers: User[],
  mid: number,
  searchTerm: string
): User[] => {
  const matchingUsers = []

  for (let i = mid; i >= 0; i--) {
    if (userMatchesSearchTerm(sortedUsers[i], searchTerm)) {
      matchingUsers.push(sortedUsers[i])
    } else {
      break
    }
  }

  for (let i = mid + 1; i < sortedUsers.length; i++) {
    if (userMatchesSearchTerm(sortedUsers[i], searchTerm)) {
      matchingUsers.push(sortedUsers[i])
    } else {
      break
    }
  }

  return matchingUsers
}
