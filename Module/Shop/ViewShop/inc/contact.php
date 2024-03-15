<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contacto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #2A3240;
            color: #DDBA6B;
        }

        header {
            background-color: #DDBA6B;
            padding: 20px;
            text-align: center;
        }

        section {
            max-width: 800px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
        }

        input,
        textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            grid-column: span 2;
            background-color: #DDBA6B;
            color: #2A3240;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2A3240;
            color: #DDBA6B;
        }

        .contact-info {
            text-align: center;
            color: #DDBA6B;
        }

        .contact-info p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<header>
    <h1>Contacto</h1>
</header>

<section>
    <form action="#" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

        <button type="submit">Enviar Mensaje</button>
    </form>

    <div class="contact-info">
        <h2>Datos de Contacto</h2>
        <p>Correo Electrónico: info@tudominio.com</p>
        <p>Teléfono: +123 456 789</p>
        <p>Dirección: Calle Principal, Ciudad</p>
    </div>
</section>

</body>
</html>
