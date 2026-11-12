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
                        class=""btn btn-outline-success"
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
           


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Registro Usuarios</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><strong>Institucion educativa</strong><span id="confirmIE"></span></p>
        <p><strong>Nombre</strong><span id="confirmname"></span></p>
        <p><strong>Tipo de usuario</strong><span id="confirmusuario"></span></p>
        <p><strong>Genero</strong><span id="confirmgenero"></span></p>
        <p><strong>correo</strong><span id="confirmemail"></span></p>
         <p><strong>Password</strong><span id="confirmpassword"></span></p>
          <p><strong>estado</strong><span id="confirmestado"></span></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"id="btn-confirmar" class="btn btn-primary">Confirmar</button>
      </div>
    </div>
  </div>
</div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const modaelElemento = document.getElementById("staticBackdrop");
        const Modal= new bootstrap.Modal(modaelElemento);     
         const userData = {
            Institucion_Educativa: formData.get("Institucion_Educativa"),
            name: formData.get("name"),
            Tipo_de_usuario: formData.get("Tipo_de_usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            check:formData.get("Activo"),
        };
        document.getElementById("confirmIE").textContent =  userData.Institucion_Educativa;
         document.getElementById("confirmname").textContent =  userData.name;
          document.getElementById("confirmusuario").textContent =  userData.Tipo_de_usuario;
           document.getElementById("confirmgenero").textContent =  userData.genero;
            document.getElementById("confirmemail").textContent =  userData.email;
            document.getElementById("confirmpassword").textContent ="*******";
             document.getElementById("confirmestado").textContent =  userData.check;

             registerForm.dataset.userData=JSON.stringify(userData);
             Modal.show();
             //presenter.register(userData);
    });

    document.getElementById("btn-confirmar").addEventListener("click", ()=>{
     const userData = JSON.parse(registerForm.dataset.userData);

     presenter.register(userData);
     const modalId=document.getElementById("staticBackdrop");
     const modal=bootstrap.Modal.getOrCreateInstance(modalId);
     modal.hide();
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message, alert="success") {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement){
       messageElement.innerHTML = `
         <div class="alert alert-${alert}" role="alert">
         ${message}
         </div>

         
         `
    }
}
