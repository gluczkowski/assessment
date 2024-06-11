package com.feefo.feefo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

public class NormaliserTest {    

    @Test
    public void testNormalise() throws Exception {
        Normaliser normaliser = new Normaliser();

        assertEquals("Software engineer", normaliser.normalise("Java engineer"));
        assertEquals("Software engineer", normaliser.normalise("C# engineer"));
        assertEquals("Accountant", normaliser.normalise("Chief Accountant"));
        assertEquals("Accountant", normaliser.normalise("Accountant"));
        assertEquals("Architect", normaliser.normalise("Architect"));
        assertEquals("Quantity surveyor", normaliser.normalise("Quantity surveyor"));
        assertEquals("Unknown job title", normaliser.normalise("Unknown job title"));
    }

    @Test
    public void testCalculateQualityScore() {        
        Normaliser normaliser = new Normaliser();
        String[] words = {"one", "phase", "of", "example"};
        double result = normaliser.calculateQualityScore(words);
        
        assertEquals(0.25, result);
    }
}

