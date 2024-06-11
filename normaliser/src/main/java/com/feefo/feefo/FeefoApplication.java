package com.feefo.feefo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.feefo.feefo.service.Normaliser;

@SpringBootApplication
public class FeefoApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(FeefoApplication.class, args);

		String jt = "Java engineer";
		Normaliser n = new Normaliser();
		String normalisedTitle = n.normalise(jt);
		System.out.println(normalisedTitle);
		jt = "C# engineer";
		normalisedTitle = n.normalise(jt);
		System.out.println(normalisedTitle);
		jt = "Chief Accountant";
		normalisedTitle = n.normalise(jt);
		System.out.println(normalisedTitle);
	}

}
