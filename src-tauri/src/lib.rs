// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::command;

#[command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn login(username: String, password: String) -> Result<String, String> {
    let username = &username;
    let password = &password;

    if username == "admin" && password == "admin" {
        Ok("Login Successfull".to_string())
    } else if username == "" || password == "" {
        Ok("Please enter username and password".to_string())
    } else {
        Ok("Error login in".to_string())
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
