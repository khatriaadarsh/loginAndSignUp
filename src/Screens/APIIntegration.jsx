// ==============================> Updated Code -> Get API Data Using Fetch Function <==============================
// import {
//   ActivityIndicator,
//   FlatList,
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';

// const APIIntegration = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     productsList();
//   }, []);
//   const productsList = () => {
//     const URL = 'https://fakestoreapi.com/products';
//     fetch(URL)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok!' + res.statusText);
//         }
//         return res.json();
//       })
//       .then(data => {
//         setProducts(data);
//         setIsLoading(false);
//       })
//       .catch(err => {
//         console.log(err.message);
//         setError(err.message);
//         setIsLoading(false);
//       });
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>
//         Products List
//       </Text>
//       {isLoading ? (
//         <ActivityIndicator color="red" size="large" />
//       ) : error ? (
//         <Text style={{color: 'red', fontSize: 18}}>{error}</Text>
//       ) : (
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={products}
//           renderItem={({item}) => (
//             <View style={styles.cardContainer}>
//               <Image source={{uri: item.image}} style={styles.image} />
//               <Text style={{fontSize: 19, textAlign: 'center'}}>
//                 {item.price}
//               </Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default APIIntegration;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: StatusBar.currentHeight,
//     backgroundColor: 'gray',
//   },
//   cardContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     width: '90%',
//     padding: 20,
//     borderRadius: 10,
//     marginVertical: 10,
//     marginHorizontal: 10,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });

// ==============================> Updated Code -> Get API Data Using Async Function <==============================
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const APIIntegration = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const API = 'https://fakestoreapi.com/products';
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error('Network response was not ok!' + response.statusText);
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 19, fontWeight: '700'}}>Product List</Text>
      {isLoading ? (
        <ActivityIndicator color="red" size="large" />
      ) : isError ? (
        <Text style={{color: 'red', fontSize: 18}}>{error}</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <View style={styles.flatList}>
              <Image source={{uri: item.image}} style={styles.image} />
              <Text>{item.price}</Text>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default APIIntegration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'gray',
  },
  flatList: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
  },
});
