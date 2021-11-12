export const conditionalDelayedStateUpdate = (
    condition,
    stateTransformer,
    stateSetter,
    delay
) => {
    return setTimeout(
        () =>
            stateSetter((oldState) =>
                condition ? stateTransformer(oldState) : oldState
            ),
        delay
    )
}
