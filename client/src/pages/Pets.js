import React, {useState} from 'react'
import gql from 'graphql-tag'
import PetBox from '../components/PetBox'
import NewPet from '../components/NewPet'
import { useQuery, useMutation } from '@apollo/react-hooks'
import Loader from '../components/Loader'
import pets from '../../../api/src/db/db.json'

// const GET_ALL_PETS = gql`
//   query AllPets {
//     pets {
//       id
//       name
//       type
//       image
//     }
//   }
// `

export default function Pets () {
  const [modal, setModal] = useState(false)
  // const {data, loading, error} = useQuery(GET_ALL_PETS)
  
  const onSubmit = input => {
    setModal(false)
  }

  const petsList = pets.pet.map(pet => (
    <div className="col-xs-12 col-md-4 col" key={pet.id}>
      <div className="box">
        <PetBox pet={pet} />
      </div>
    </div>
  ))
  
  if (modal) {
    return (
      <div className="row center-xs">
        <div className="col-xs-8">
          <NewPet onSubmit={onSubmit} onCancel={() => setModal(false)}/>
        </div>
      </div>
    )
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          {petsList}
        </div>
      </section>
    </div>
  )
}
