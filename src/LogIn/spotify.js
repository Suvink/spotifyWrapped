

const authrise_uri = "https://accounts.spotify.com/authorize"
const client_id = process.env.SPOTIFY_CLIENT_ID
const redirect_uri = "https://wrapped.suvin.me"
const scope = [
    "user-top-read",
    "user-read-email",
    "user-library-read"
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial

    }, {})
}

export const login_uri = `${authrise_uri}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope.join('%20')}&show_dialog=true`
