import {RouteProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import {Routes} from 'src/Interface/Routes';
import {TMDB_APIKEY} from '@env';
import {Details} from 'src/Interface/Details';
import {Crew} from 'src/Interface/Crew';
import {Cast} from 'src/Interface/Cast';
import Chart from 'src/Components/Chart/Chart';
import {FlatList} from 'react-native-gesture-handler';
import Cards from 'src/Components/Card/Cards';

type RouteProps = {
  route: RouteProp<Routes, 'Movie'>;
};

const Movie = ({route}: RouteProps) => {
  const [details, setDetails] = useState({} as Details);
  const [crew, setCrew] = useState<Crew[]>([]);
  const [cast, setCast] = useState<Cast[]>([]);

  const movie = route.params.item;

  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_APIKEY}&append_to_response=credits`,
      );
      const data = await res.json();
      if (isMounted) {
        setDetails(data);
        setCrew(data.credits?.crew);
        setCast(data.credits?.cast);
      }

      return () => (isMounted = false);
    };
    fetchDetails();
  }, [movie.id]);

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.MovieCard}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          }}
          style={styles.MoviePoster}
        />
        <View style={styles.TextInfo}>
          {crew
            .filter(el => el.job === 'Director')
            .map(el => (
              <Text key={el.id} style={styles.MovieDetails}>
                Directed by {el.name}
              </Text>
            ))}

          <Text style={styles.MovieDetails}>
            {movie.release_date.slice(0, 4)} {details.runtime} minutes
          </Text>
        </View>
      </View>

      <View style={styles.Overview}>
        <Text style={styles.Tagline}>{details.tagline}</Text>
        <Text style={styles.OverviewText}>{movie.overview}</Text>
      </View>

      {/* chart */}
      <View>
        <Chart />
      </View>
      <View>
        <Cards />
      </View>

      {/* cast and crew */}
      <View style={styles.CastCrewContainer}>
        <View>
          <Text style={styles.creditsHeader}>Cast</Text>
          <FlatList
            horizontal={true}
            data={cast}
            renderItem={({item}) => (
              <View style={styles.Cast}>
                <View style={styles.CreditImage}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
                    }}
                    style={styles.CrewImage}
                  />
                </View>
                <View>
                  <Text style={styles.CastInfo}>{item.name}</Text>
                  <Text style={styles.CastInfo}>{item.character}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.credit_id}
          />
        </View>

        <View>
          <Text style={styles.creditsHeader}>Crew</Text>
          <FlatList
            horizontal={true}
            data={crew}
            renderItem={({item}) => (
              <View style={styles.Cast}>
                <View style={styles.CreditImage}>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.profile_path}`,
                    }}
                    style={styles.CrewImage}
                  />
                </View>
                <View>
                  <Text style={styles.CastInfo}>{item.name}</Text>
                  <Text style={styles.CastInfo}>{item.job}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.credit_id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  MoviePoster: {
    width: 150,
    height: 200,
  },
  MovieCard: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  Overview: {
    margin: 10,
  },
  OverviewText: {
    color: 'white',
    marginTop: 3,
    letterSpacing: 2,
  },
  Tagline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  MovieDetails: {
    color: 'white',
  },
  TextInfo: {
    marginLeft: 10,
  },
  CreditImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  CastCrewContainer: {
    marginTop: 10,
    margin: 5,
  },
  CrewImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  creditsHeader: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 6,
  },
  Cast: {
    padding: 5,
  },
  CastInfo: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Movie;
