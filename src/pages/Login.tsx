import { Box, Button, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// form schema
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

type LoginForm = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  // submitting the form
  const submitLoginForm: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: " 0.3rem",
        padding: "0.5rem",
      }}
    >
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" width="md" noValidate onSubmit={handleSubmit(submitLoginForm)}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          autoFocus
          {...register("email")}
        />
        {errors.email && (
          <Typography component="p" color={red[400]}>
            {errors.email.message}
          </Typography>
        )}
        <TextField
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <Typography component="p" color={red[400]}>
            {errors.password.message}
          </Typography>
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          {isSubmitting ? "Submitting..." : "Login"}
        </Button>
      </Box>
    </Box>
  );
}
