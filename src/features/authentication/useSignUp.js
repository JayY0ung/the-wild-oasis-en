import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationKey: "signup",
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account created successfully, please verify the new account from the user's email address"
      );
    },
  });
  return { signup, isLoading };
}
