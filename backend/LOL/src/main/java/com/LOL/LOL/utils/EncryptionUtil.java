package com.LOL.LOL.utils;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

public class EncryptionUtil {
	   private final static byte[] keyBytes = new byte[]{0x01, 0x23, (byte)0xAB, (byte)0xCD, 0x45, 0x67, (byte)0x89, (byte)0xEF};

	    public static String encrypt(String senha) {
	        try {
	            // Define uma chave específica em formato hexadecimal
	            SecretKey chaveDES = new SecretKeySpec(keyBytes, "DES");

	            // Cria a cifra
	            Cipher cifraDES = Cipher.getInstance("DES/ECB/PKCS5Padding");

	            // Inicializa a cifra para o processo de encriptação
	            cifraDES.init(Cipher.ENCRYPT_MODE, chaveDES);

	            // Converte a senha para bytes
	            byte[] senhaBytes = senha.getBytes("UTF-8");

	            // Encripta a senha
	            byte[] senhaoEncriptado = cifraDES.doFinal(senhaBytes);

	            // Codifica o texto encriptado em Base64 para facilitar o armazenamento e transmissão
	            return Base64.getEncoder().encodeToString(senhaoEncriptado);

	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	    }
	    
	    public static String decrypt(String senhaEncriptada) {
	        try {
	            SecretKey chaveDES = new SecretKeySpec(keyBytes, "DES");
	            Cipher cifraDES = Cipher.getInstance("DES/ECB/PKCS5Padding");
	            cifraDES.init(Cipher.DECRYPT_MODE, chaveDES);
	            byte[] senhaBytesEncriptadas = Base64.getDecoder().decode(senhaEncriptada);
	            byte[] senhaBytes = cifraDES.doFinal(senhaBytesEncriptadas);
	            return new String(senhaBytes, "UTF-8");
	        } catch (Exception e) {
	            e.printStackTrace();
	            return null;
	        }
	    }
	}