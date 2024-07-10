import {create} from 'zustand'

export const useMainStore = create((set) => ({
  key: 'inicio',
  setKey: (component)=> set({key: component})
}))