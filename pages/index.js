function Home(){
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: "'Georgia', serif",
            padding: '20px'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '60px 40px',
                maxWidth: '600px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                animation: 'fadeIn 1.5s ease-in'
            }}>
                <h1 style={{
                    color: '#764ba2',
                    fontSize: '3em',
                    marginBottom: '30px',
                    fontWeight: 'normal'
                }}>
                    💪 Não Desista! 💻
                </h1>
                
                <p style={{
                    color: '#333',
                    fontSize: '1.3em',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                }}>
                    Cada linha de código que você escreve hoje é um passo rumo ao seu futuro.
                </p>
                
                <p style={{
                    color: '#333',
                    fontSize: '1.3em',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                }}>
                    Os desafios de hoje serão as histórias de superação que você contará amanhã.
                </p>
                
                <p style={{
                    color: '#333',
                    fontSize: '1.3em',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                }}>
                    Continue! Seu eu do futuro vai agradecer imensamente pela sua persistência de hoje.
                </p>
                
                <div style={{
                    background: '#f0f0f0',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}>
                    <p style={{
                        color: '#555',
                        fontSize: '1.1em',
                        lineHeight: '1.6',
                        margin: '0',
                        fontStyle: 'italic'
                    }}>
                        "O único código impossível de debugar é aquele que você nunca escreveu."
                    </p>
                </div>
                
                <p style={{
                    color: '#333',
                    fontSize: '1.2em',
                    lineHeight: '1.8',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>
                    Você está construindo o seu futuro. Continue assim! 🚀
                </p>
                
                <div style={{
                    marginTop: '40px',
                    fontSize: '3em'
                }}>
                    🎯 ⭐ 🏆
                </div>
                
                <p style={{
                    marginTop: '30px',
                    color: '#764ba2',
                    fontSize: '1.1em',
                    fontStyle: 'italic'
                }}>
                    Cada dev de sucesso já foi iniciante um dia
                </p>
            </div>
            
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}

export default Home;