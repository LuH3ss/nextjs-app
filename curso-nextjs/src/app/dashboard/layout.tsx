export default function DashboardLayout({children, video, chat, analytics} : {
    children: React.ReactNode,
    chat: React.ReactNode,
    video: React.ReactNode,
    analytics: React.ReactNode,
}) {
    return (
        <article>
            {children}
            <section>
                <aside>{video}</aside>
                <aside>{chat}</aside>
                <aside>{analytics}</aside>
            </section>
        </article>
    )
}

// trabajando rutas paralelas
// esto sirve para trabajad con componentes que dentor tengan varios modulos