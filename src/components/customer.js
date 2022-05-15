
function Customer(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td><img src={props.image} alt="profile"/></td>
            <td>{props.name}</td>
            <td>{props.birthday}</td>
            <td>{props.gender}</td>
            <td>{props.job}</td>
        </tr>
    )
}
export default Customer ;