export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/lessons/dropshipwithnomoney", "/lessons/makemoneywith$0"],
};
