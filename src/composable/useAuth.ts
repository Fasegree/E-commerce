import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";
import { onMounted, ref } from "vue";
import { auth, provider } from "../firebase";
import router from "../router";

const currentUser = ref<User | null>(null);
const isAuthLoading = ref<boolean>(true);
let isInitialized = false;

export function useAuth() {
  if (!isInitialized) {
    isInitialized = true;

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        currentUser.value = user;
        isAuthLoading.value = false;
      });
    });
  }
  return {
    currentUser,
    isAuthLoading,
  };
}

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {}
};

export const logout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {}
};
