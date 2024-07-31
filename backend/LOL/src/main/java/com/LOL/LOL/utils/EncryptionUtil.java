package com.LOL.LOL.utils;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class EncryptionUtil {
    private static final String AES = "AES";
    private static final String AES_CBC_PADDING = "AES/CBC/PKCS5Padding";

    // Chave e IV codificados em Base64
    private static final String ENCRYPTED_KEY = "U29tZVNlY3JldEtleQ=="; // "SomeSecretKey" base64 encoded
    private static final String ENCRYPTED_IV = "U29tZUlW"; // "SomeIV" base64 encoded

    private static SecretKey getSecretKey() {
        byte[] decodedKey = Base64.getDecoder().decode(ENCRYPTED_KEY);
        return new SecretKeySpec(decodedKey, 0, decodedKey.length, AES);
    }

    private static IvParameterSpec getIvParameterSpec() {
        byte[] decodedIv = Base64.getDecoder().decode(ENCRYPTED_IV);
        return new IvParameterSpec(decodedIv);
    }

    public static String encrypt(String data) throws Exception {
        Cipher cipher = Cipher.getInstance(AES_CBC_PADDING);
        cipher.init(Cipher.ENCRYPT_MODE, getSecretKey(), getIvParameterSpec());
        byte[] encrypted = cipher.doFinal(data.getBytes());
        return Base64.getEncoder().encodeToString(encrypted);
    }

    public static String decrypt(String encryptedData) throws Exception {
        Cipher cipher = Cipher.getInstance(AES_CBC_PADDING);
        cipher.init(Cipher.DECRYPT_MODE, getSecretKey(), getIvParameterSpec());
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encryptedData));
        return new String(decrypted);
    }
}