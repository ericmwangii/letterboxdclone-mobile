import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Routes} from 'src/Interface/Routes';

type RouteProps = {
  route: RouteProp<Routes, 'Movie'>;
};

const Movie = ({route}: RouteProps) => {
  console.log(route.params.item);

  const movie = route.params.item;

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        style={styles.MoviePoster}
      />
      <Text>{movie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MoviePoster: {
    width: 150,
    height: 200,
  },
});

export default Movie;
