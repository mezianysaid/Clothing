// const createUserDocumentFromAuth=async(userData)=>{
//     const userDoc= doc(db,'users',userId)

//     const userSnap=await getDoc(userDoc)

//     if(!userSnap.exists()){
//         const {displayName, email}=userData
//         const  createdAt=new Date()
//         try {
//             await setDoc(userDoc,
//                 {displayName,email,createdAt}
//             )
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     return userDoc
// }
