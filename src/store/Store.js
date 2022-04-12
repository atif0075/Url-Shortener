import { defineStore } from 'pinia'
import { auth, provider, signInWithPopup, Gitprovider, db } from '../Firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore';
export const useStore = defineStore('store', {
    state: () => {
        return {
            user: null,
            isReady: false,
            Name: 'M Atif',
            Email: 'chatif476@gmail.com',
            img: 'https://i.ibb.co/wpG1QZ6/user.png',
            uid: '',
            show: false,
            linkList: [
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
                "https://animxyz.com/docs/1",
                "https://animxyz.com/docs/2",
                "https://animxyz.com/docs/3",
            ]
        }
    },
    actions: {
        async signup({ name, email, password }) {
            console.log(password);
            const res = await createUserWithEmailAndPassword(auth, email, password)
            this.Name = name
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
                this.Email = user.email
                this.uid = user.uid
                setTimeout(() => {
                    this.img = user.photoURL
                    setDoc(doc(db, "Users", `${this.uid}`), {
                        Name: this.Name,
                        Email: this.Email,
                        img: this.img,
                    });
                }, 1000);
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
                console.log(user);
                this.Name = user.displayName
                this.Email = user.email
                this.uid = user.uid
                setTimeout(() => {
                    this.img = user.photoURL
                    setDoc(doc(db, "Users", `${this.uid}`), {
                        Name: this.Name,
                        Email: this.Email,
                        img: this.img,
                    });
                }, 1000);
                this.setUser(user)
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
        useStore().Name = docSnap.data().Name
        useStore().Email = docSnap.data().Email
        useStore().img = docSnap.data().img
        console.log(useStore().Name);
        console.log(useStore().Email);
        console.log(useStore().img);
        setTimeout(() => {

            useStore().show = true
        }, 2000);
    } else {
        console.log("No such document!");
    }
}
