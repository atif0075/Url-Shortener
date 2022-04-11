import { defineStore } from 'pinia'
import { auth, provider, signInWithPopup, Gitprovider, db } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc,getDoc } from 'firebase/firestore';
export const useStore = defineStore('store', {
    state: () => {
        return {
            user: null,
            isReady: false,
            Name: '',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.palmcityyachts.com%2Fwp%2Fwp-content%2Fuploads%2Fpalmcityyachts.com%2F2015%2F09%2Fdefault-profile-480x480.png&f=1&nofb=1',
            uid: '',
            show: false
        }
    },
    actions: {
        async signup({ email, password }) {
            console.log(password);
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                this.setUser(res.user)
            } else {
                throw new Error('Could not complete request')
            }
        },
        async signin({ email, password }) {
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                this.setUser(res.user)
            } else {
                throw new Error('Could not complete request')
            }
        },
        async GoogleSignup() {

            const res = await signInWithPopup(auth, provider)
            let user = res.user
            this.setUser(res.user)

            if (user) {

                this.Name = user.displayName


                this.uid = user.uid
                setTimeout(() => {
                    this.img = user.photoURL
                }, 2000);
                this.setUser(user)


            } else {
                console.log('Could not complete request')
            }
        },
        async GitSignup() {
            const res = await signInWithPopup(auth, Gitprovider)
            let user = res.user
            this.setUser(res.user)
            if (user) {
                this.Name = user.displayName

                setTimeout(() => {
                    this.img = user.photoURL
                }, 2000);
                this.setUser(user)
                console.log(this.img);

            } else {
                console.log('Could not complete request')
            }
        },
        async signOut() {
            await signOut(auth)
            this.Name = ''
            this.setUser(null)
        },
        setUser(payload) {
            this.user = payload
            console.log('User state changed ', this.user)
        },
        setAuth(payload) {
            this.isReady = payload
        },
    },
})

const unsub = onAuthStateChanged(auth, async (user) => {
    useStore().setAuth(true)
    useStore().setUser(user)
    unsub()
    if (useStore().user != null) {
        await getData()

    }
})
unsub()

const getData = async () => {
    const docRef = doc(db, "Users", useStore().user?.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        useStore().show = true
    } else {
        console.log("No such document!");
    }
}

