<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Login Section for unauthenticated users -->
    <div v-if="!isAuthenticated" class="flex flex-col items-center justify-center min-h-screen p-8">
      <!-- Spotify Logo -->
      <div class="mb-12">
        <svg class="w-64" viewBox="0 0 1134 340" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-32-19-76-28-141-27-42 1-48 8-54 8zm189 91c-16 0-33-7-33-20 0-12 17-20 33-20 16 0 33 8 33 20 0 13-17 20-33 20zm-111-41c-9 3-18-9-9-13 49-14 163-10 205 17 11 7-1 22-12 14-40-26-144-21-184-18z" />
        </svg>
      </div>

      <div class="text-center max-w-md">
        <h1 class="text-4xl font-bold mb-6">Bienvenue sur Spotify Clone</h1>
        <p class="text-gray-400 mb-8">Connectez-vous avec Spotify pour accéder à votre bibliothèque musicale, vos playlists et plus encore.</p>
        <button
          @click="login"
          class="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-colors text-lg font-semibold flex items-center justify-center space-x-2 mx-auto"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span>Se connecter avec Spotify</span>
        </button>
      </div>
    </div>

    <!-- Content for authenticated users -->
    <div v-else class="pb-32">
      <!-- Category filters -->
      <div class="p-6 pt-4 flex space-x-2 overflow-x-auto scrollbar-hide sticky top-0 z-10 bg-black/80 backdrop-blur-md">
        <button class="bg-white text-black px-6 py-2 rounded-full font-semibold">All</button>
        <button class="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full font-semibold">Music</button>
        <button class="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full font-semibold">Podcasts</button>
      </div>

      <!-- Popular Radio Section -->
      <section class="px-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Popular radio</h2>
          <a href="#" class="text-sm text-gray-400 hover:underline">Show all</a>
        </div>
        
        <div class="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto pb-6 scrollbar-hide">
          <div v-for="(radio, index) in popularRadio" :key="index" class="w-48">
            <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group relative">
              <img :src="radio.imageUrl" :alt="radio.title" class="w-full aspect-square object-cover rounded-lg mb-4">
              <div class="absolute bottom-20 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="bg-green-500 rounded-full p-3 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z"/>
                  </svg>
                </button>
              </div>
              <h3 class="font-bold text-base">{{ radio.title }}</h3>
              <p class="text-sm text-gray-400 line-clamp-2">{{ radio.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Artists -->
      <section class="px-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Popular artists</h2>
          <a href="#" class="text-sm text-gray-400 hover:underline">Show all</a>
        </div>
        
        <div class="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto pb-6 scrollbar-hide">
          <div v-for="(artist, index) in popularArtists" :key="index" class="w-48">
            <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group relative">
              <img :src="artist.imageUrl" :alt="artist.name" class="w-full aspect-square object-cover rounded-full mb-4">
              <div class="absolute bottom-20 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="bg-green-500 rounded-full p-3 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z"/>
                  </svg>
                </button>
              </div>
              <h3 class="font-bold text-base text-center">{{ artist.name }}</h3>
              <p class="text-sm text-gray-400 text-center">Artist</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Albums & Singles -->
      <section class="px-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Popular albums & singles</h2>
          <a href="#" class="text-sm text-gray-400 hover:underline">Show all</a>
        </div>
        
        <div class="grid grid-flow-col auto-cols-max gap-6 overflow-x-auto pb-6 scrollbar-hide">
          <div v-for="(album, index) in popularAlbums" :key="index" class="w-48">
            <div class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group relative">
              <img :src="album.imageUrl" :alt="album.title" class="w-full aspect-square object-cover rounded-lg mb-4">
              <div class="absolute bottom-20 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="bg-green-500 rounded-full p-3 shadow-lg">
                  <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5.14v14l11-7-11-7z"/>
                  </svg>
                </button>
              </div>
              <h3 class="font-bold text-base">{{ album.title }}</h3>
              <p class="text-sm text-gray-400">{{ album.artist }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Recently Played -->
      <section class="px-6 mb-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold">Recently played</h2>
          <a href="#" class="text-sm text-gray-400 hover:underline">Show all</a>
        </div>
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="item in recentlyPlayed" :key="item.track.id" 
            class="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer group relative"
            @click="playTrack(item.track.uri)"
          >
            <img 
              v-if="item.track.album?.images?.[0]?.url" 
              :src="item.track.album.images[0].url" 
              :alt="item.track.name"
              class="w-full aspect-square object-cover rounded-lg mb-4"
            />
            <div class="absolute bottom-20 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
              <button class="bg-green-500 rounded-full p-3 shadow-lg">
                <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </button>
            </div>
            <h3 class="font-bold text-base truncate">{{ item.track.name }}</h3>
            <p class="text-sm text-gray-400 truncate">{{ item.track.artists.map(artist => artist.name).join(', ') }}</p>
          </div>
        </div>
      </section>
    </div>
    
    <!-- Player Control Bar -->
    <div class="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between">
      <div class="flex items-center space-x-4 w-1/3">
        <img v-if="currentTrack?.album?.images?.[0]?.url" :src="currentTrack.album.images[0].url" alt="Cover" class="w-14 h-14 rounded">
        <div class="flex-1 min-w-0">
          <p class="font-medium truncate">{{ currentTrack?.name || 'Not playing' }}</p>
          <p class="text-sm text-gray-400 truncate">{{ currentTrack?.artists?.map(a => a.name).join(', ') || 'Select a track' }}</p>
        </div>
      </div>
      
      <div class="flex flex-col items-center w-1/3">
        <div class="flex items-center space-x-6 mb-2">
          <button class="text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6.94a1 1 0 00-1.5.86v8.4a1 1 0 001.5.86l7-4.2a1 1 0 000-1.72l-7-4.2z" transform="rotate(180, 12, 12)"/>
            </svg>
          </button>
          <button class="bg-white rounded-full p-2">
            <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5.14v14l11-7-11-7z"/>
            </svg>
          </button>
          <button class="text-gray-400 hover:text-white">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6.94a1 1 0 00-1.5.86v8.4a1 1 0 001.5.86l7-4.2a1 1 0 000-1.72l-7-4.2z"/>
            </svg>
          </button>
        </div>
        <div class="flex items-center w-full space-x-2">
          <span class="text-xs text-gray-400">0:00</span>
          <div class="h-1 bg-gray-700 rounded-full flex-1 overflow-hidden">
            <div class="bg-gray-400 h-full w-0 hover:bg-green-500 transition-colors"></div>
          </div>
          <span class="text-xs text-gray-400">0:00</span>
        </div>
      </div>
      
      <div class="flex items-center justify-end space-x-3 w-1/3">
        <button class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
        </button>
        <button class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
          </svg>
        </button>
        <button class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3v10h8V3h-8zm6 8h-4V5h4v6zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM3 3v8h8V3H3zm2 2h4v4H5V5zm8 8v8h8v-8h-8zm2 2h4v4h-4v-4z"/>
          </svg>
        </button>
        <div class="w-24">
          <div class="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div class="bg-white h-full w-1/2"></div>
          </div>
        </div>
        <button class="text-gray-400 hover:text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '~/composables/useAuth.js'
import { useSpotifyPlayback } from '~/composables/useSpotifyPlayback.js'

const { login, accessToken, refreshAccessToken } = useAuth()
const { playTrack, currentTrack, isPlaying } = useSpotifyPlayback()
const recentlyPlayed = ref([])
const isAuthenticated = ref(false)

// Mock data for Popular Radio
const popularRadio = [
  {
    title: 'Cheb Hasni',
    description: 'With Cheb Akil, Khaled, Cheb Mami and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,artist'
  },
  {
    title: 'Lbenj',
    description: 'With Ayoub Anbaoui, Duke, Mocci and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,rap'
  },
  {
    title: 'Bilel Tacchini',
    description: 'With Cheb Hichem TGV, Bilel Tacchini, Cheba Warda and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,dj'
  },
  {
    title: 'Cheba Warda',
    description: 'With Cheb Hichem TGV, Didou Parisien, Cheba Warda and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,vocal'
  },
  {
    title: 'Cheb Bilal',
    description: 'With Cheb Akil, Cheb Azzedine, Reda Taliani and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,singer'
  },
  {
    title: 'Draganov',
    description: 'With Inkonnu, Madd and more',
    imageUrl: 'https://source.unsplash.com/random/300x300?music,band'
  }
]

// Mock data for Popular Artists
const popularArtists = [
  {
    name: 'Soolking',
    imageUrl: 'https://source.unsplash.com/random/300x300?singer,man'
  },
  {
    name: 'El Grande Toto',
    imageUrl: 'https://source.unsplash.com/random/300x300?rapper,man'
  },
  {
    name: 'Cheb Bachir',
    imageUrl: 'https://source.unsplash.com/random/300x300?singer,arab'
  },
  {
    name: 'Draganov',
    imageUrl: 'https://source.unsplash.com/random/300x300?rapper,mask'
  },
  {
    name: 'Didine Canon 16',
    imageUrl: 'https://source.unsplash.com/random/300x300?singer,cap'
  },
  {
    name: 'Balti',
    imageUrl: 'https://source.unsplash.com/random/300x300?arab,artist'
  }
]

// Mock data for Popular Albums
const popularAlbums = [
  {
    title: 'Sans Visa',
    artist: 'Soolking',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,cover'
  },
  {
    title: 'Caméléon',
    artist: 'El Grande Toto',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,art'
  },
  {
    title: 'Cameleon',
    artist: 'Maître Gims',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,modern'
  },
  {
    title: 'Légendaire',
    artist: 'Dadju',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,urban'
  },
  {
    title: 'Paradise',
    artist: 'Soolking',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,color'
  },
  {
    title: 'Versus',
    artist: 'Vitaa & Slimane',
    imageUrl: 'https://source.unsplash.com/random/300x300?album,minimal'
  }
]

// Check authentication status
const checkAuth = () => {
  isAuthenticated.value = !!accessToken.value
}

// Fetch recently played tracks
const fetchRecentlyPlayed = async () => {
  if (!accessToken.value) return

  try {
    const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=12', {
      headers: {
        'Authorization': `Bearer ${accessToken.value}`
      }
    })
    
    if (!response.ok) {
      if (response.status === 401) {
        await refreshAccessToken()
        return fetchRecentlyPlayed()
      }
      
      // Gérer la réponse vide pour éviter l'erreur JSON
      const text = await response.text()
      if (!text) {
        recentlyPlayed.value = []
        return
      }
      
      const errorData = JSON.parse(text)
      console.error('Recently played API error:', errorData)
      throw new Error(`Failed to fetch recently played tracks: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
    }
    
    // Gérer la réponse vide pour éviter l'erreur JSON
    const text = await response.text()
    if (!text) {
      recentlyPlayed.value = []
      return
    }
    
    const data = JSON.parse(text)
    recentlyPlayed.value = data.items || []
  } catch (error) {
    console.error('Error fetching recently played:', error)
    recentlyPlayed.value = []
  }
}

// Fetch data when component is mounted
onMounted(() => {
  checkAuth()
  if (isAuthenticated.value) {
    fetchRecentlyPlayed()
  }
})
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style> 