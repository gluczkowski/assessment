package com.feefo.feefo.service;

import java.util.Arrays;
import java.util.List;

public class Normaliser {

    private List<String> normalized = Arrays.asList("Architect", "Software engineer", "Quantity surveyor",
            "Accountant");

    public String normalise(String jobTitle) throws Exception {
        
        if(jobTitle == null || jobTitle == "") {
            throw new Exception( "The job title is null or empty. Please provide a job title");
        }

        String[] palavras = jobTitle.toLowerCase().split(" ");
        String melhorCombinacao = jobTitle;
        double bestQualityScore = 0.0;

        for (String normalizedJobTitle : normalized) {
            double qualityScore = 0.0;

            for (String word : palavras) {
                if (normalizedJobTitle.toLowerCase().contains(word)) {
                    qualityScore += calculateQualityScore(palavras);
                }
            }

            if (qualityScore > bestQualityScore) {
                bestQualityScore = qualityScore;
                melhorCombinacao = normalizedJobTitle;
            }
        }

        return melhorCombinacao;
    }

    public double calculateQualityScore(String[] palavras){
        return 1.0 / palavras.length;
    }
}