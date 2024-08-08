package com.LOL.LOL.utils;

import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registerUser(String email) {
        String password = generateRandomPassword();
        Usuario user = new Usuario();
        user.setEmail(email);
        user.setSenha(passwordEncoder.encode(password));
        usuarioRepository.save(user);
        emailService.sendEmail(email, "Sua senha de cadastro", "Sua senha é: " + password);
        return user;
    }

    private String generateRandomPassword() {
        Random random = new Random();
        int password = 1000 + random.nextInt(9000);
        return String.valueOf(password);
    }
}
