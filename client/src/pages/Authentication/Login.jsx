const Login = () => {
  return (
    <form className="w-full flex flex-col gap-3">
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        className="w-full h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
        aria-label="Email"
      />
      <label htmlFor="password" className="sr-only">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="w-full h-[2.3rem] rounded-sm px-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-green"
        aria-label="Password"
      />
      <span className="text-primary-green cursor-pointer">Forgot Your Password</span>
      <button className="w-full bg-primary-green text-white h-[2.3rem] rounded-sm hover:bg-primary-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green" type="submit">
        Login
      </button>
      <span className="mx-auto">or</span>
      <button className="w-full bg-white border-solid border-primary-green border-2 text-primary-green h-[2.3rem] rounded-sm hover:bg-primary-green hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green">
        Login with Google
      </button>
    </form>
  );
};

export default Login;
