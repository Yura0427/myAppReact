const required1 = values => {
    debugger
    if (values) return undefined
    return 'Field is required'
    // const errors = {}
    // if (!values.email) {
    //     errors.email = 'Required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    // }
    // return errors
}

export const required = value => value ? undefined : 'Field is required'
export const emailError = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address' : undefined