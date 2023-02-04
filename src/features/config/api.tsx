import { api } from 'features/services/axios'

import { GET_CONFIG_URL } from './constants'

// Types
import { GetConfig } from './types'
import { useQuery } from 'react-query'

const KEY = 'config'

export const getConfig = async () => await api<GetConfig>(GET_CONFIG_URL)

export const useGetConfig = async () => await useQuery(KEY, getConfig)
