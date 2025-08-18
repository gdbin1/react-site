import { create } from "zustand"

export const zustand = create(
    (set) => ({
        count2: 0,
        increment2: () => set((state) => ({
            count2: state.count2 + 1
        })),
        decrement2: () => set((state) => ({
            count2: state.count2 - 1
        })),
        double2: () => set((state) => ({
            count2: state.count2 * 2
        })),
        slush2: () => set((state) => ({
            count2: state.count2 / 2
        })),
        reset2: () => set((state) => ({
            count2: state.count2 = 0
        }))
    })
)