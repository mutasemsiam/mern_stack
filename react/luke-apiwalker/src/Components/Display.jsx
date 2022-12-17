import React from 'react'

const Display = ({result, selected}) => {
  return (
    <div>
        {result ==="notFound"?
        <h1>Not Found</h1>:null}
      {selected === "people" ?
                <div>
                    <h1>{result.name}</h1>
                    <p>{result.height}</p>
                    <p>{result.hair_color}</p>
                    <p>{result.skin_color}</p>
                </div>
                
                : null}
                {selected ==="planets" ?
                <div>
                    <h1>{result.name}</h1>
                    <p>{result.climate}</p>
                    <p>{result.terrain}</p>
                    <p>{result.surface_water}</p>
                    <p>{result.population}</p>
                </div>: null}
                 {selected ==="starships" ?
                <div>
                    <h1>{result.name}</h1>
                    <p>{result.model}</p>
                    <p>{result.starship_class}</p>
                    <p>{result.consumables}</p>
                    </div>
                    :null
            }
            
           
    </div>
  )
}

export default Display
