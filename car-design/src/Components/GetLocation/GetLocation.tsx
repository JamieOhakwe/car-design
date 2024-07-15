import { useQuery, gql } from "@apollo/client";

interface Location {
	id: string;
	name: string;
	description: string;
	photo: string;
}
interface LocationsData {
	locations: Location[];
}

const GetLocation = () => {
    const GET_LOCATIONS = gql`
		query GetLocations {
			locations {
				id
				name
				description
				photo
			}
		}
	`;
    const {
        loading,
        
        data,
    }: {
        loading: boolean;
        
        data: LocationsData | undefined;
    } = useQuery(GET_LOCATIONS);
    
    if (loading) return <p>Loading...</p>;
    // if (error?.message) return <p>Error : {error.message}</p>;
    
    if (!data) return null;

    return data.locations.map(
        ({ id, name, description, photo }: Location) => (
            <div key={id} className="">
                <h3>{name}</h3>
                <img
                    width="400"
                    height="250"
                    alt="location-reference"
                    src={`${photo}`}
                />
                <br />
                <b>About this location:</b>
                <p>{description}</p>
                <br />
            </div>
        )
    );

 
}

export default GetLocation









