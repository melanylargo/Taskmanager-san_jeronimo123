/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear  cuenta </h1>
                    <p>Regístrate para comenzar IE San Jeronimo</p>
                </header>

                <form id="register-form" class="auth-form">

                   <div class="form-group">
                        <label for="Institucion_Educativa">
                            Institucion Educativa
                        </label>

                        <select
                            id="Institucion_Educativa"
                            name="Institucion_Educativa"
                            required
                            <option value="Otra">Selecciona tu Institucion Eductiva</option>
                            <option value="IE San Jeronimo">Selecciona tu Institucion Eductiva</option>
                            <option value="IE San Jeronimo">IE San Jeronimo</option>
                            <option value="IE San Lorenzo">IE San Lorenzo</option>
                            <option value="Otra">Otra</option>
                            
                            
                        >
                        </select>
                    </div>
                
                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="Tipo de usuario">
                            Tipo de usuario
                        </label>

                        <select
                            type="text"
                            id="register-Tipo_de_usuario"
                            name="Tipo_de_usuario"
                            required
                            >

                            <Option value="">Selecciona tu tipo de usuario</option>
                            <Option value="Estudiante">Estudiante</option>
                            <Option value="Docente">Docente</option>
                        >   
                        </select>
                        
                    </div>


                    <div class="form-group">
                        <label for="register-genero">
                            genero
                        </label>

                        <select
                        
                            id="register-genero"
                            name="genero"
                            required
                              >
                          <option value="">selecciona tu genero</option>
                          <option value="Femenino">Femenino</option>
                          <option value="Mascculino">Masculino</option>
                        </select>  
                    </div>


                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                     <div class="form-group">
                      <label for="check">Activo</label>
                      <input type="checkbox" id="check" name="check" value "si" checked>
                      </div>

                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta 
                    </button> 

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            Institucion_Educativa: formData.get("Institucion_Educativa"),
            name: formData.get("name"),
            Tipo_de_usuario: formData.get("Tipo_de_usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            check:formData.get("Activo"),
        };

        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}