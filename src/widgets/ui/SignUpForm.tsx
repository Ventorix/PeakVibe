import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";

const SignUpForm = () => {
  //здесь будет логика для валидаций форм
  //нормальная ли это для feature-sliced структуры
  return (
    <div className=" flex flex-col gap-5 justify-center h-screen items-center">
      <Input type="email" placeholder="Your email" />
      <Input type="text" placeholder="Your username" />
      <Input type="password" placeholder="Your password" />
      <Button variant={"primary"}>Create account</Button>
    </div>
  );
};

export default SignUpForm;
