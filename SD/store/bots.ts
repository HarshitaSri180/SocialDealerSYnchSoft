const config = useRuntimeConfig();
import axios from 'axios';
axios.defaults.baseURL = config.public.API_URL;
axios.defaults.headers.common = {'Authorization': `bearer ${sessionStorage.getItem('access_token')}`}

export const useBotsStore = defineStore('bots', {
    state: () => ({
        bots: [ ],
        sessions: [ ],
        suggestions: [ ],
        session:{},
        active_bot:{}
    }),
    getters: {
        count(state) {
            return state.bots.length
        },
        find(state) {
            return (name: any) => (
                state.bots.filter(bot =>
                    // @ts-ignore
                    bot.bot.includes(name)
                )
            )
        }
    },
    actions: {
        fetchBots( ) {
            // Fetch bots from API
            axios.get('/astro-bots').then((response: any) => this.bots = response.data.data.bots)
        },
        fetchSuggestions( ) {
            // Fetch bots from API
            axios.get('/chat/suggestions').then((response: any) => this.suggestions = response.data.data.suggestions)
        },
        fetchChatSessions( ) {
            // Fetch bots from API
            axios.get('/chat/sessions/all').then((response: any) => this.sessions = response.data.data.sessions)
        },
        fetchChatSessionMessages(sessionId:any ) {
            // Fetch bots from API
            return axios.get(`/chat/${sessionId}/past-messages`).then((response: any) => this.session = response.data.data.session)
        },
        addChatSessionMessages(message:any) {
            // @ts-ignore
            this.session.messages.push(message);
        },
        waitForResponseMessage(session_id:string,bot_id:string,user_content:string) {
            console.log(session_id,bot_id,user_content)
            return axios.post(`/chat/${session_id}/${bot_id}`, {user_content})

        },
        startANewSession(bot_id:any, data:object) {
            return axios.post(`/chat/session/${bot_id}`, {...data})
        },
        fetchBot(bot_id:string ) {
            // Fetch bots from API
            return axios.get(`/bot/${bot_id}`).then((response: any) => this.active_bot = response.data.data.bot)
        },
    }
})