import { Instance, SnapshotIn, types } from "mobx-state-tree"
import { api } from "../services/api"
import { withSetPropAction } from "./helpers/withSetPropAction"

const initHistory = {
  dateTime: "",
  name: "",
  time: 0,
  rest: 0,
  hr: 0,
  points: 0,
  exercises: "",
}

export const HistoryStoreModel = types
  .model("HistoryStore")
  .props({
    pointsPerWod: types.array(
      types.model({
        x: types.number,
        y: types.number,
      }),
    ),
    history: types.optional(
      types.model({
        dateTime: types.string,
        name: types.string,
        time: types.number,
        rest: types.number,
        hr: types.number,
        points: types.number,
        exercises: types.string,
      }),
      initHistory,
    ),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    async fetchHistory() {
      const response = await api.getHistory()
      if (response.kind === "ok") {
        store.setProp("pointsPerWod", response.pointsPerWod)
        store.setProp("history", response.history)
      } else {
        console.error(`Error fetching episodes: ${JSON.stringify(response)}`)
      }
    },

    editHistory(data: { points: number; name: string }) {
      store.history.points = data.points
      store.history.name = data.name
    },
  }))

export interface HistoryStore extends Instance<typeof HistoryStoreModel> {}

export interface HistoryStoreSnapshotIn extends SnapshotIn<typeof HistoryStoreModel> {}
