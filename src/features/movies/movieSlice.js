import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = 'Harry';
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        return response.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const seriesText = 'Friends';
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`)
        return response.data;
    }
)

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowsDetail',
    async (id) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        console.log(response);
        return response.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectorMovieOrShows: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, selectedMovieOrShow: payload };
        },
    }
});

export const { removeSelectorMovieOrShows } = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllshows = (state) => state.movies.shows;
export const getSelectedMovieOrShows = (state) => state.movies.selectedMovieOrShow;



export default movieSlice.reducer;