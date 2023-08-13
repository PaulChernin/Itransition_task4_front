import { xor } from 'lodash'

export const toggleItem = <T,>(array: T[], item: T): T[] => {
    return xor(array, [item])
}