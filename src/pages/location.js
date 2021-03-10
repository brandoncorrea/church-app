import config from '../config/config';

const NotFound = () =>
    <h1>Campus not found.</h1>;

const GetCampusesById = (id) =>
    config.campuses.filter(i => 
        i.id === id);

function GetCampusById(id) {
    var filtered = GetCampusesById(id);
    return filtered.length === 1 
        ? filtered[0] 
        : null;
}

const ShowLocationInformation = (campus) =>
    <div>
        <h1>{campus.name}</h1>
        <h3>{campus.phone}</h3>
        <p>Hours: {campus.officeHours}</p>
        <p>
            Address: 
            {campus.address.addressLine1}
            {campus.address.addressLine2}
            {campus.address.city},
            {campus.address.state}
            {campus.address.zip}
        </p>
    </div>;

function Location(props) {
    console.log(props);
    var campus = GetCampusById(props.locationId);
    return (
        <>
            {
                campus == null 
                    ? NotFound()
                    : ShowLocationInformation(campus)
            }
        </>
    );
}

export default Location;
