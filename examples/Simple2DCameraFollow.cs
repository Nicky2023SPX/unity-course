// Simple 2d cameramovement script - (c) Niccolò Sorrentino

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraBehaviour : MonoBehaviour
{
    public Transform cart;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = Vector3.Lerp(transform.position, cart.position + new Vector3(0, 0, -10), Time.deltaTime * 10);
    }
}
