export const metadata = {
    title: "Blog",
    desciption: "Estas en Blog ami"
  }
  


export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <header>Cabecera de Blog</header>
            <main>
                <section>
                {children}
                </section>
                <aside>
                    <form action="">
                        <input type="search" name="" id="" placeholder="Voy a tener suerte" />
                        <input type="submit" value="Go!" />
                    </form>
                </aside>
            </main>
            <footer>Footer de BLOG</footer>
        </>
    )
}