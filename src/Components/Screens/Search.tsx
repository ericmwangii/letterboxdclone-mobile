import {TMDB_APIKEY} from '@env';
import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Movie} from 'src/Interface/Movie';
// import {Routes} from 'src/Interface/Routes';
import Loader from 'src/Components/Loader/Loader';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// type MovieScreenNavigationProp = NativeStackNavigationProp<Routes, 'Movie'>;

interface ScreenProps {
  navigation: any;
}

const Search: FC<ScreenProps> = ({navigation}) => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_APIKEY}&query=${search}`;

  // eslint-disable-next-line no-shadow
  const onChange = (search: string) => {
    setSearch(search);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setResults(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Form}>
        <TextInput
          underlineColorAndroid="white"
          style={styles.Search}
          value={search}
          placeholder="Search for movie..."
          placeholderTextColor={'white'}
          onChangeText={onChange}
          onSubmitEditing={fetchData}
        />

        <Ionicons name="search" size={25} color="white" onPress={fetchData} />
      </View>

      {loading && results ? (
        <Loader loading={loading} />
      ) : (
        <FlatList
          data={results}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Movie', {name: item.title, item: item});
              }}>
              <View style={styles.MovieCard}>
                <Image
                  source={{
                    uri:
                      `https://image.tmdb.org/t/p/original${item.poster_path}` ||
                      `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
                  }}
                  style={styles.MoviePoster}
                />
                <View style={styles.MovieInfo}>
                  <Text style={styles.Title}>
                    {item.title} ({item.release_date?.slice(0, 4)})
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Search: {
    width: 250,
    height: 40,
    fontSize: 16,
    marginRight: 5,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 50,
    color: 'white',
  },
  MoviePoster: {
    width: 100,
    height: 130,
  },
  Title: {
    fontWeight: 'bold',
    color: 'white',
  },
  MovieInfo: {
    marginLeft: 20,
  },
  MovieCard: {
    flexDirection: 'row',
    margin: 3,
  },
});

export default Search;
