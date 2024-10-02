declare module "scrollreveal" {
  interface ScrollRevealOptions {
    distance?: string;
    duration?: number;
    delay?: number;
    reset?: boolean;
  }

  interface ScrollReveal {
    reveal(selector: string, options?: ScrollRevealOptions): void;
  }

  const ScrollReveal: () => ScrollReveal;
  export default ScrollReveal;
}
