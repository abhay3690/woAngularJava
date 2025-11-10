package com.example.demo;

import com.example.demo.constants.AppConstatns;
//import com.example.demo.model.Role;
//import com.example.demo.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

@SpringBootApplication
public class DemoApplication /*implements CommandLineRunner*/ {
//    private final PasswordEncoder passwordEncoder;

//    private final RoleRepository roleRepo;

//    public DemoApplication(PasswordEncoder passwordEncoder, RoleRepository roleRepo) {
//        this.passwordEncoder = passwordEncoder;
//        this.roleRepo = roleRepo;
//    }

    public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		System.out.println("This is the testing");
	}
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        try {
//
//            Role role = new Role();
//            role.setId(AppConstatns.ADMIN_USER);
//            role.setName("ROLE_ADMIN");
//
//            Role role1 = new Role();
//            role1.setId(AppConstatns.NORMAL_USER);
//            role1.setName("ROLE_NORMAL");
//
//            List<Role> roles = List.of(role,role1);
//            this.roleRepo.saveAll(roles);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
