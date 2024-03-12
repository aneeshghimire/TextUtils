import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        var text = word.charAt(0);
        return text.toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {capitalize(props.alert.type)} ! {props.alert.message}
        </div>
    )
}

export default Alert
