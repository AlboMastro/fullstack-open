export const Notification = ({ message }) => {
    if (message === '' || message === null) {
      return null
    }
    
    const Notifstyle = {
        color: `yellow`,
        background: `lightgrey`,
        fontSize: `20px`,
        borderStyle: `solid`,
        borderRadius: `5px`,
        padding: `10px`,
        marginBottom: `10px`,
      }

    return (
      <div style={Notifstyle}>
        {message}
      </div>
    )
}