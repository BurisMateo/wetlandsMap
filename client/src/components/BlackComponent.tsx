import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react"
import { wetlandCategories } from "../interfaces/interfaces"

interface propsInterface {
    unaProp: string
}

// Siempre el componente se tiene que exportar.
// Si el componente es una funcion es de tipo React.FC<La interface de las props> (funcional component, supongo) 
export const PostCard: React.FC<propsInterface> = (props: propsInterface) => {

    // Siempre tiene que tener return
    return (
        // Siempre tiene que haber un elemento padre que contenga a todo el return.
        // Si queres retornar una lista de items y no los queres conetener con nada.
        // Usas un fragment <> </> son dos etiquetas vacias que simbolisan la nada misma, pero sirven para contener. 
        <>
            <IonItem>
                <IonLabel position={'stacked'}>Categoría del humedal:</IonLabel>
                    <IonSelect placeholder={"Categoría del humedal:"}>
                        {
                        wetlandCategories.map((Categorie, index) => {
                            return (<IonSelectOption value={Categorie} key={`IonSelectOption-${index}-wetlandCategories-${Categorie}`}>{Categorie}</IonSelectOption>)
                        })
                        }
                    </IonSelect>
                </IonItem>
            <IonItem>
                <IonLabel position={'stacked'}>Categoría del humedal:</IonLabel>
                <IonSelect placeholder={"Categoría del humedal:"}>
                    {
                    wetlandCategories.map((Categorie, index) => {
                        return (<IonSelectOption value={Categorie} key={`IonSelectOption-${index}-wetlandCategories-${Categorie}`}>{Categorie}</IonSelectOption>)
                    })
                    }
                </IonSelect>
            </IonItem>
        </>
    )
}